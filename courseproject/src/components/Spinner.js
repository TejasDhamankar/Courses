import "./spinner.css";
function Spinner()
{
    return(
        <div className="flex flex-col justify-center space-y-2">
            <div className="loader"></div>
            <p className="bg-slate-700 text-lg font-semibold">Loding...</p>
        </div>
    );

}

export default Spinner;