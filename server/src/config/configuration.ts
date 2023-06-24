export default () => ({
    port: parseInt(process.env.BACKEND_PORT, 8080) || 8080,
    database: {
      host: "38.43.130.106",
      port: parseInt("5432", 10) || 5432,
      username: "postgres",
      password: "d32fewg423g4erb45y56htrh54jhtyj",
    },
    kafka: {
      host: process.env.KAFKA_HOST,
      port: parseInt(process.env.KAFKA_PORT),
      clientId: process.env.KAFKA_CLIENT_ID,
      groupId: process.env.KAFKA_GROUP_ID
    }
  });
  