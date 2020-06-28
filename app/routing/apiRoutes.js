module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users “visit” a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });
    app.post("/api/friends", function (req, res) {
        // Empty out the arrays of data
        // tableData.length = 0;
        // waitListData.length = 0;
        res.json({ ok: true });
    });
};