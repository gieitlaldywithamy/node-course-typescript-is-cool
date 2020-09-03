import express = require( 'express' );
import bodyParser from 'body-parser';
import todosRoutes from './routes/todos'; // syntax always picks default

const app = express();

app.use( bodyParser.json() );
app.use( todosRoutes );

app.listen( { port: 3000 } );