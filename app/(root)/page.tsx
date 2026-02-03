interface Album {
    id: number;
    title: string;
    artists: { name: string }[];

}

async function Home() {
    const response = await fetch("https://api.discogs.com/releases/249504");
    if (!response.ok) throw new Error("Something went wrong!");

    const album: Album = await response.json();

    return (
        <div className="grid grid-cols-1">

            <div className="grid-cols-1 col-span-2">
                <h1>Title: {album.title}</h1>
                <p>Name: {album.artists[0]?.name}</p>
                </div>
        </div>
    )
}
export default Home
