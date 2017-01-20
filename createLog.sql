CREATE OR REPLACE FUNCTION create_log_columns()
  RETURNS void AS
$BODY$
DECLARE
 my_row RECORD;
BEGIN
 FOR my_row IN 
 SELECT table_name
 FROM information_schema.tables
 WHERE table_schema = 'public' and table_type='BASE TABLE'
 LOOP
 IF NOT EXISTS
 (
 SELECT attname FROM pg_attribute WHERE attrelid = 
 (SELECT oid FROM pg_class WHERE relname = my_row.table_name )
 AND attname = 'created_at'
 )
 THEN
 EXECUTE('ALTER TABLE ' || my_row.table_name || 
 ' ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,'||
 ' ADD COLUMN created_by INTEGER,' ||
 ' ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,'||
 ' ADD COLUMN updated_by INTEGER;'
 );
 END IF;
 END LOOP;
END
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION create_log_columns()
  OWNER TO postgres;

-- Function: create_log_triggers()

-- DROP FUNCTION create_log_triggers();

CREATE OR REPLACE FUNCTION log_insert()
  RETURNS trigger AS
$BODY$
  BEGIN
    NEW.created_at = NOW();
    NEW.created_by = basic_auth.current_user_id();
    RETURN NEW;
  END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION log_insert()
  OWNER TO postgres;

CREATE OR REPLACE FUNCTION log_update()
  RETURNS trigger AS
$BODY$
  BEGIN
    NEW.updated_at = NOW();
    NEW.updated_by = basic_auth.current_user_id();
    RETURN NEW;
  END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION log_update()
  OWNER TO postgres;
  

CREATE OR REPLACE FUNCTION create_log_triggers()
  RETURNS void AS
$BODY$
DECLARE
 my_row RECORD;
BEGIN
 FOR my_row IN 
 SELECT table_name
 FROM information_schema.tables
 WHERE table_schema = 'public' and table_type='BASE TABLE'
 LOOP
 EXECUTE(
'DROP TRIGGER IF EXISTS log_insert_'||my_row.table_name||'_tf ON ' || my_row.table_name || ';' 
'DROP TRIGGER IF EXISTS log_update_'||my_row.table_name||'_tf ON ' || my_row.table_name || ';' 

'CREATE TRIGGER log_insert_'||my_row.table_name||'_tf BEFORE INSERT ON ' || my_row.table_name || ' FOR EACH ROW EXECUTE PROCEDURE log_insert();' 
'CREATE TRIGGER log_update_'||my_row.table_name||'_tf BEFORE UPDATE ON ' || my_row.table_name || ' FOR EACH ROW EXECUTE PROCEDURE log_update();'
 );

 END LOOP;
END
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION create_log_triggers()
  OWNER TO postgres;

-- Function: create_log_columns()

-- DROP FUNCTION create_log_columns();

