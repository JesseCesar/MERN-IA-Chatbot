import app from './app.js';
import { connectToDB } from './db/connection.js';
const PORT = process.env.PORT || 5000;
connectToDB()
    .then(() => {
    app.listen(PORT, () => console.log('Server running on port 5000 and connected to MongoDB'));
})
    .catch((error) => console.error('Error connecting to MongoDB:', error));
//# sourceMappingURL=index.js.map