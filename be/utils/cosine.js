const natural = require('natural');
const calculateSimilarity = (query, documents) => {
    const TfIdf = natural.TfIdf;
    const tfidf = new TfIdf();

    // Tambahkan setiap dokumen ke dalam model TF-IDF
    documents.forEach(doc => tfidf.addDocument(doc));

    // Vektor query
    const queryVector = [];
    tfidf.tfidfs(query, (i, measure) => {
        queryVector[i] = measure;
    });

    // Hitung cosine similarity dengan setiap dokumen
    const results = documents.map((doc, index) => {
        const docVector = [];
        tfidf.tfidfs(doc, (i, measure) => {
            docVector[i] = measure;
        });

        // Hitung dot product
        const dotProduct = queryVector.reduce((sum, qVal, i) => sum + qVal * (docVector[i] || 0), 0);

        // Hitung magnitudo
        const magnitudeQuery = Math.sqrt(queryVector.reduce((sum, val) => sum + val * val, 0));
        const magnitudeDoc = Math.sqrt(docVector.reduce((sum, val) => sum + val * val, 0));

        // Cosine Similarity
        const similarity = magnitudeQuery && magnitudeDoc ? dotProduct / (magnitudeQuery * magnitudeDoc) : 0;

        return similarity.toFixed(2);
    });

    return results;
}
module.exports = {
    calculateSimilarity
}