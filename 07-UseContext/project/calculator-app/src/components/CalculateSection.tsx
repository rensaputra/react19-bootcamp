const CalculateSection = () => {
    return(
    <div className="border p-5 rounded-md h-[250px] w-[230px] grid gap-3">
        <button type="button" className="border rounded-md p-2 bg-blue-500 text-white">Add</button>
        <button type="button" className="border rounded-md p-2 bg-blue-500 text-white">Subtract</button>
        <button type="button" className="border rounded-md p-2 bg-blue-500 text-white">Multiply</button>
        <button type="button" className="border rounded-md p-2 bg-blue-500 text-white">Divide</button>

    </div>
);
}

export default CalculateSection;