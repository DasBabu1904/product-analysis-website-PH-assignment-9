import { useEffect, useState } from "react";

function useChartData() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('ChartData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return [data, setData];
}

export default useChartData;