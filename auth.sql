--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.5
-- Dumped by pg_dump version 9.5.5

-- Started on 2017-01-20 12:16:35 SAST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 9 (class 2615 OID 18683)
-- Name: basic_auth; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA basic_auth;


ALTER SCHEMA basic_auth OWNER TO postgres;

SET search_path = basic_auth, pg_catalog;

--
-- TOC entry 635 (class 1247 OID 18734)
-- Name: jwt_claims; Type: TYPE; Schema: basic_auth; Owner: postgres
--

CREATE TYPE jwt_claims AS (
	id integer,
	username text,
	logged_in_time timestamp without time zone,
	role text,
	email text
);


ALTER TYPE jwt_claims OWNER TO postgres;

--
-- TOC entry 265 (class 1255 OID 18741)
-- Name: check_role_exists(); Type: FUNCTION; Schema: basic_auth; Owner: postgres
--

CREATE FUNCTION check_role_exists() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
  if not exists (select 1 from pg_roles as r where r.rolname = new.role) then
    raise foreign_key_violation using message =
      'unknown database role: ' || new.role;
    return null;
  end if;
  return new;
end
$$;


ALTER FUNCTION basic_auth.check_role_exists() OWNER TO postgres;

--
-- TOC entry 266 (class 1255 OID 18742)
-- Name: clearance_for_role(name); Type: FUNCTION; Schema: basic_auth; Owner: postgres
--

CREATE FUNCTION clearance_for_role(u name) RETURNS void
    LANGUAGE plpgsql
    AS $$
declare
  ok boolean;
begin
  select exists (
    select rolname
      from pg_authid
     where pg_has_role(current_user, oid, 'member')
       and rolname = u
  ) into ok;
  if not ok then
    raise invalid_password using message =
      'current user not member of role ' || u;
  end if;
end
$$;


ALTER FUNCTION basic_auth.clearance_for_role(u name) OWNER TO postgres;

--
-- TOC entry 267 (class 1255 OID 18743)
-- Name: current_email(); Type: FUNCTION; Schema: basic_auth; Owner: postgres
--

CREATE FUNCTION current_email() RETURNS text
    LANGUAGE plpgsql
    AS $$
begin
  return current_setting('postgrest.claims.email');
exception
  -- handle unrecognized configuration parameter error
  when undefined_object then return '';
end;
$$;


ALTER FUNCTION basic_auth.current_email() OWNER TO postgres;

--
-- TOC entry 280 (class 1255 OID 26851)
-- Name: current_user_id(); Type: FUNCTION; Schema: basic_auth; Owner: postgres
--

CREATE FUNCTION current_user_id() RETURNS integer
    LANGUAGE plpgsql
    AS $$
begin
  return current_setting('postgrest.claims.id')::integer;
exception
  -- handle unrecognized configuration parameter error
  when undefined_object then return NULL;
end;
$$;


ALTER FUNCTION basic_auth.current_user_id() OWNER TO postgres;

--
-- TOC entry 268 (class 1255 OID 18745)
-- Name: encrypt_pass(); Type: FUNCTION; Schema: basic_auth; Owner: postgres
--

CREATE FUNCTION encrypt_pass() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
  if tg_op = 'INSERT' or new.pass <> old.pass then
    new.pass = crypt(new.pass, gen_salt('bf'));
  end if;
  return new;
end
$$;


ALTER FUNCTION basic_auth.encrypt_pass() OWNER TO postgres;

--
-- TOC entry 269 (class 1255 OID 18746)
-- Name: send_validation(); Type: FUNCTION; Schema: basic_auth; Owner: postgres
--

CREATE FUNCTION send_validation() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
declare
  tok uuid;
begin
  select uuid_generate_v4() into tok;
  insert into basic_auth.tokens (token, token_type, user_id)
         values (tok, 'validation', new.id);
  perform pg_notify('validate',
    json_build_object(
      'email', new.email,
      'token', tok,
      'token_type', 'validation'
    )::text
  );
  return new;
end
$$;


ALTER FUNCTION basic_auth.send_validation() OWNER TO postgres;

--
-- TOC entry 270 (class 1255 OID 18747)
-- Name: user_role(text, text); Type: FUNCTION; Schema: basic_auth; Owner: postgres
--

CREATE FUNCTION user_role(email text, pass text) RETURNS name
    LANGUAGE plpgsql
    AS $$
begin
  return (
  select role from basic_auth.users
   where (users.email = user_role.email or users.username = user_role.email)
     and users.pass = crypt(user_role.pass, users.pass)
  );
end;
$$;


ALTER FUNCTION basic_auth.user_role(email text, pass text) OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 185 (class 1259 OID 18753)
-- Name: tokens; Type: TABLE; Schema: basic_auth; Owner: postgres
--

CREATE TABLE tokens (
    token uuid NOT NULL,
    token_type public.token_type_enum NOT NULL,
    created_at timestamp with time zone DEFAULT ('now'::text)::date NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE tokens OWNER TO postgres;

--
-- TOC entry 186 (class 1259 OID 18757)
-- Name: users; Type: TABLE; Schema: basic_auth; Owner: postgres
--

CREATE TABLE users (
    email text NOT NULL,
    pass text NOT NULL,
    role name NOT NULL,
    verified boolean DEFAULT false NOT NULL,
    username text NOT NULL,
    id integer NOT NULL,
    CONSTRAINT users_email_check CHECK ((email ~* '^.+@.+\..+$'::text)),
    CONSTRAINT users_pass_check CHECK ((length(pass) < 512)),
    CONSTRAINT users_role_check CHECK ((length((role)::text) < 512))
);


ALTER TABLE users OWNER TO postgres;

--
-- TOC entry 187 (class 1259 OID 18767)
-- Name: users_id_seq; Type: SEQUENCE; Schema: basic_auth; Owner: postgres
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO postgres;

--
-- TOC entry 2291 (class 0 OID 0)
-- Dependencies: 187
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: basic_auth; Owner: postgres
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- TOC entry 2148 (class 2604 OID 18790)
-- Name: id; Type: DEFAULT; Schema: basic_auth; Owner: postgres
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- TOC entry 2281 (class 0 OID 18753)
-- Dependencies: 185
-- Data for Name: tokens; Type: TABLE DATA; Schema: basic_auth; Owner: postgres
--

COPY tokens (token, token_type, created_at, user_id) FROM stdin;
5464786c-55d9-4ae0-bc47-c0530e0f5fff	validation	2017-01-10 00:00:00+02	3
\.


--
-- TOC entry 2282 (class 0 OID 18757)
-- Dependencies: 186
-- Data for Name: users; Type: TABLE DATA; Schema: basic_auth; Owner: postgres
--

COPY users (email, pass, role, verified, username, id) FROM stdin;
coach1001@gmail.com	$2a$06$jmrGa0Ojv8xa.FXGC.5DluyOFhAT4UaSu.MFH3r4/UECj.407v1XO	super	f	fweber	3
\.


--
-- TOC entry 2293 (class 0 OID 0)
-- Dependencies: 187
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: basic_auth; Owner: postgres
--

SELECT pg_catalog.setval('users_id_seq', 5, true);


--
-- TOC entry 2154 (class 2606 OID 18793)
-- Name: tokens_pkey; Type: CONSTRAINT; Schema: basic_auth; Owner: postgres
--

ALTER TABLE ONLY tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (token);


--
-- TOC entry 2156 (class 2606 OID 18795)
-- Name: users_email_unique; Type: CONSTRAINT; Schema: basic_auth; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- TOC entry 2158 (class 2606 OID 18797)
-- Name: users_pkey; Type: CONSTRAINT; Schema: basic_auth; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 2160 (class 2606 OID 18799)
-- Name: users_username_unique; Type: CONSTRAINT; Schema: basic_auth; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_username_unique UNIQUE (username);


--
-- TOC entry 2152 (class 1259 OID 18812)
-- Name: fki_tokens_users_fkey; Type: INDEX; Schema: basic_auth; Owner: postgres
--

CREATE INDEX fki_tokens_users_fkey ON tokens USING btree (user_id);


--
-- TOC entry 2162 (class 2620 OID 18813)
-- Name: encrypt_pass; Type: TRIGGER; Schema: basic_auth; Owner: postgres
--

CREATE TRIGGER encrypt_pass BEFORE INSERT OR UPDATE ON users FOR EACH ROW EXECUTE PROCEDURE encrypt_pass();


--
-- TOC entry 2163 (class 2620 OID 18815)
-- Name: ensure_user_role_exists; Type: TRIGGER; Schema: basic_auth; Owner: postgres
--

CREATE CONSTRAINT TRIGGER ensure_user_role_exists AFTER INSERT OR UPDATE ON users NOT DEFERRABLE INITIALLY IMMEDIATE FOR EACH ROW EXECUTE PROCEDURE check_role_exists();


--
-- TOC entry 2164 (class 2620 OID 18816)
-- Name: send_validation; Type: TRIGGER; Schema: basic_auth; Owner: postgres
--

CREATE TRIGGER send_validation AFTER INSERT ON users FOR EACH ROW EXECUTE PROCEDURE send_validation();


--
-- TOC entry 2161 (class 2606 OID 18818)
-- Name: tokens_users_fkey; Type: FK CONSTRAINT; Schema: basic_auth; Owner: postgres
--

ALTER TABLE ONLY tokens
    ADD CONSTRAINT tokens_users_fkey FOREIGN KEY (user_id) REFERENCES users(id);


--
-- TOC entry 2288 (class 0 OID 0)
-- Dependencies: 9
-- Name: basic_auth; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA basic_auth FROM PUBLIC;
REVOKE ALL ON SCHEMA basic_auth FROM postgres;
GRANT ALL ON SCHEMA basic_auth TO postgres;
GRANT USAGE ON SCHEMA basic_auth TO anon;
GRANT USAGE ON SCHEMA basic_auth TO author;


--
-- TOC entry 2289 (class 0 OID 0)
-- Dependencies: 185
-- Name: tokens; Type: ACL; Schema: basic_auth; Owner: postgres
--

REVOKE ALL ON TABLE tokens FROM PUBLIC;
REVOKE ALL ON TABLE tokens FROM postgres;
GRANT ALL ON TABLE tokens TO postgres;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE tokens TO anon;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE tokens TO author;


--
-- TOC entry 2290 (class 0 OID 0)
-- Dependencies: 186
-- Name: users; Type: ACL; Schema: basic_auth; Owner: postgres
--

REVOKE ALL ON TABLE users FROM PUBLIC;
REVOKE ALL ON TABLE users FROM postgres;
GRANT ALL ON TABLE users TO postgres;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE users TO anon;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE users TO author;


--
-- TOC entry 2292 (class 0 OID 0)
-- Dependencies: 187
-- Name: users_id_seq; Type: ACL; Schema: basic_auth; Owner: postgres
--

REVOKE ALL ON SEQUENCE users_id_seq FROM PUBLIC;
REVOKE ALL ON SEQUENCE users_id_seq FROM postgres;
GRANT ALL ON SEQUENCE users_id_seq TO postgres;
GRANT USAGE ON SEQUENCE users_id_seq TO anon;


-- Completed on 2017-01-20 12:16:35 SAST

--
-- PostgreSQL database dump complete
--

