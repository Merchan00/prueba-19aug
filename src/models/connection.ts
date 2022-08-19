import cassandra from "cassandra-driver";

const authProvider = new cassandra.auth.PlainTextAuthProvider('', '');
const contactPoints = ['127.0.0.1'];
const localDataCenter = 'datacenter1';

async function run() {
  const client = new cassandra.Client({
    contactPoints: contactPoints,
    authProvider: authProvider,
    localDataCenter: localDataCenter,
    keyspace: 'prueba19aug',
  });

  await client.connect();

  const rs = await client.execute('SELECT * FROM system.local');
  const row = rs.first();
  console.log(`Connected to cluster: ${row['cluster_name']}`);

  await client.shutdown();
}

run()

export default run;