import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

type GraphProps = {
    data: any[],
    caption: string;
    labels: string[];
};

const Graph = ({ data, caption, labels }: GraphProps) => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

    const min = -1000;
    const max = 1000;
    const bcolor = "rgb(51, 107, 135)";
    const bgcolor = "rgba(56, 69, 77)";

    const options: Object = {
        responsive: true,
        interaction: {
            mode: "index",
            intersect: true,
        },
        scales: {
            y: {
                min,
                max,
                type: "linear",
                display: true,
                position: "left",
            },
            x: {
                type: "category",
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: "Line Chart",
            },
        },
    };

    const dataInfo = {
        labels: labels,
        datasets: [
            {
                label: caption,
                data,
                borderColor: bcolor,
                backgroundColor: bgcolor,
            }
        ]
    }

    return (
        <>
            <Line options={options} data={dataInfo} />
        </>
    );
};

Graph.propTypes = {
    caption: PropTypes.string,
    data: PropTypes.array,
    labels: PropTypes.array,
}

export default Graph;
