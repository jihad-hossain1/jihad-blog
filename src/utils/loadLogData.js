

const loadLogData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, { cache: "force-cache" });
    return res.json();
};

export default loadLogData;