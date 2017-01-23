-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler  version: 0.8.2-beta1
-- PostgreSQL version: 9.5
-- Project Site: pgmodeler.com.br
-- Model Author: ---


-- Database creation must be done outside an multicommand file.
-- These commands were put in this file only for convenience.
-- -- object: new_database | type: DATABASE --
-- -- DROP DATABASE IF EXISTS new_database;
-- CREATE DATABASE new_database
-- ;
-- -- ddl-end --
-- 

-- object: public.variables | type: TABLE --
-- DROP TABLE IF EXISTS public.variables CASCADE;
CREATE TABLE public.variables(
	id serial NOT NULL,
	is_input boolean NOT NULL DEFAULT true,
	is_constant boolean NOT NULL DEFAULT false,
	is_calculated boolean NOT NULL DEFAULT false,
	is_percentage boolean NOT NULL DEFAULT false,
	variable_type varchar(50) NOT NULL DEFAULT 'number',
	name varchar(50) NOT NULL,
	default_value double precision NOT NULL DEFAULT 0.0,
	formula text,
	minimum double precision,
	maximum double precision,
	CONSTRAINT variable_pkey PRIMARY KEY (id),
	CONSTRAINT variable_ukey UNIQUE (name)

);
-- ddl-end --
ALTER TABLE public.variables OWNER TO postgres;
-- ddl-end --

-- object: public.formula_variables | type: TABLE --
-- DROP TABLE IF EXISTS public.formula_variables CASCADE;
CREATE TABLE public.formula_variables(
	id serial NOT NULL,
	for_variable integer NOT NULL,
	formula_variable integer NOT NULL,
	sequence integer NOT NULL,
	formula_letter varchar(3) NOT NULL,
	CONSTRAINT formula_variable_pkey PRIMARY KEY (id),
	CONSTRAINT formula_variable_ukey UNIQUE (for_variable,formula_variable,formula_letter)

);
-- ddl-end --
ALTER TABLE public.formula_variables OWNER TO postgres;
-- ddl-end --

-- object: public.forms | type: TABLE --
-- DROP TABLE IF EXISTS public.forms CASCADE;
CREATE TABLE public.forms(
	id serial NOT NULL,
	name text NOT NULL,
	type text NOT NULL DEFAULT 'input',
	CONSTRAINT form_pkey PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.forms OWNER TO postgres;
-- ddl-end --

-- object: public.samples | type: TABLE --
-- DROP TABLE IF EXISTS public.samples CASCADE;
CREATE TABLE public.samples(
	id serial NOT NULL,
	identifier text NOT NULL,
	latitude double precision,
	longitude double precision,
	CONSTRAINT sample_pkey PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.samples OWNER TO postgres;
-- ddl-end --

-- object: public.form_has_variables | type: TABLE --
-- DROP TABLE IF EXISTS public.form_has_variables CASCADE;
CREATE TABLE public.form_has_variables(
	id serial NOT NULL,
	form integer NOT NULL,
	variable integer NOT NULL,
	CONSTRAINT form_has_variable_pkey PRIMARY KEY (id),
	CONSTRAINT form_has_variable_uq UNIQUE (form,variable)

);
-- ddl-end --
ALTER TABLE public.form_has_variables OWNER TO postgres;
-- ddl-end --

-- object: public.sample_has_values | type: TABLE --
-- DROP TABLE IF EXISTS public.sample_has_values CASCADE;
CREATE TABLE public.sample_has_values(
	id serial NOT NULL,
	sample integer NOT NULL,
	variable integer NOT NULL,
	value double precision,
	CONSTRAINT sample_has_values_pkey PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.sample_has_values OWNER TO postgres;
-- ddl-end --

-- object: public.sample_has_forms | type: TABLE --
-- DROP TABLE IF EXISTS public.sample_has_forms CASCADE;
CREATE TABLE public.sample_has_forms(
	id serial NOT NULL,
	form integer NOT NULL,
	sample integer NOT NULL,
	filled_on timestamp,
	filled_by integer,
	printed_on timestamp,
	printed_by integer,
	checked_on timestamp,
	checked_by integer,
	CONSTRAINT sample_has_form_pkey PRIMARY KEY (id)

);
-- ddl-end --
ALTER TABLE public.sample_has_forms OWNER TO postgres;
-- ddl-end --

-- object: for_variable_fkey | type: CONSTRAINT --
-- ALTER TABLE public.formula_variables DROP CONSTRAINT IF EXISTS for_variable_fkey CASCADE;
ALTER TABLE public.formula_variables ADD CONSTRAINT for_variable_fkey FOREIGN KEY (for_variable)
REFERENCES public.variables (id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: formula_variable_fkey | type: CONSTRAINT --
-- ALTER TABLE public.formula_variables DROP CONSTRAINT IF EXISTS formula_variable_fkey CASCADE;
ALTER TABLE public.formula_variables ADD CONSTRAINT formula_variable_fkey FOREIGN KEY (formula_variable)
REFERENCES public.variables (id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: form_fkey | type: CONSTRAINT --
-- ALTER TABLE public.form_has_variables DROP CONSTRAINT IF EXISTS form_fkey CASCADE;
ALTER TABLE public.form_has_variables ADD CONSTRAINT form_fkey FOREIGN KEY (form)
REFERENCES public.forms (id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: variable_fkey | type: CONSTRAINT --
-- ALTER TABLE public.form_has_variables DROP CONSTRAINT IF EXISTS variable_fkey CASCADE;
ALTER TABLE public.form_has_variables ADD CONSTRAINT variable_fkey FOREIGN KEY (variable)
REFERENCES public.variables (id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: value_fkey | type: CONSTRAINT --
-- ALTER TABLE public.sample_has_values DROP CONSTRAINT IF EXISTS value_fkey CASCADE;
ALTER TABLE public.sample_has_values ADD CONSTRAINT value_fkey FOREIGN KEY (variable)
REFERENCES public.variables (id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: sample_fkey | type: CONSTRAINT --
-- ALTER TABLE public.sample_has_values DROP CONSTRAINT IF EXISTS sample_fkey CASCADE;
ALTER TABLE public.sample_has_values ADD CONSTRAINT sample_fkey FOREIGN KEY (sample)
REFERENCES public.samples (id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: form_fkey | type: CONSTRAINT --
-- ALTER TABLE public.sample_has_forms DROP CONSTRAINT IF EXISTS form_fkey CASCADE;
ALTER TABLE public.sample_has_forms ADD CONSTRAINT form_fkey FOREIGN KEY (form)
REFERENCES public.forms (id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: sample_fkey | type: CONSTRAINT --
-- ALTER TABLE public.sample_has_forms DROP CONSTRAINT IF EXISTS sample_fkey CASCADE;
ALTER TABLE public.sample_has_forms ADD CONSTRAINT sample_fkey FOREIGN KEY (sample)
REFERENCES public.samples (id) MATCH FULL
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


