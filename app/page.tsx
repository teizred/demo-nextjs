import Hello from "@/components/Hello";

const Home = () => {
    console.log('Home');
    return (
        <main>
        <div className="text-2xl font-bold">Welcome to Next.js</div>
            <Hello />

        </main>
    );
}
export default Home
