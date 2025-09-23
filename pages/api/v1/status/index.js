import database from 'infra/database.js'

async function status(request, response) {

  const updatedAt = new Date().toISOString();

  const version = await database.query('SHOW server_version');

  const maxConnections = await database.query('SHOW max_connections');

  const usedConnections = await database.query('SELECT count(*) as usedConnections FROM pg_stat_activity;');

  response.status(200).json({
    updated_at : updatedAt,
    dependencies : {
      database : {
        version : version.rows[0].server_version,
        max_connections : maxConnections.rows[0].max_connections,
        used_connections : usedConnections.rows[0].usedconnections,
      }
    }
  });
}

export default status;