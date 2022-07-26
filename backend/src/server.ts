import app from "./app";

app.listen(process.env.PORT, () => {
    console.log(`DAW Multimedia file management application is running on port ${process.env.PORT}.`);
});