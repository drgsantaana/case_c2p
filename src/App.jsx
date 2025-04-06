//Código desenvolvido para o case teste C2P para a vaga de Estágio em Desenvolvimento Fullstack.
//Código fonte: https://github.com/drgsantaana/case_c2p

import React from 'react';
import Plot from 'react-plotly.js';

function App() {
    //dados passados para o case:
    const durationAnos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //dados para grafico de linha
    const lineData = [
        {
            x: durationAnos,
            y: [1, 2.4, 3, 7, 5, 8, 9, 9, 9, 9, 9, 9],
            mode: 'lines',
            marker: { color: 'blue' },
            name: 'Corporate DI',
        },
        {
            x: durationAnos,
            y: [1, 2, 4, 6, 8, 8, 8, 8, 8, 8, 8, 8],
            mode: 'lines',
            marker: { color: 'orange' },
            name: 'Engie Brasil',
        },
    ];
    //dados para o scatter point
    const scatterData = [
        {
            x: [1.3],
            y: [3],
            mode: 'markers',
            type: 'scatter',
            name: 'ENGIA0',
            marker: { color: 'blue' },
        },
        {
            x: [2.6],
            y: [4],
            mode: 'markers',
            type: 'scatter',
            name: 'ENGIA1',
            marker: { color: 'purple' },
        },
        {
            x: [3.7],
            y: [5],
            mode: 'markers',
            type: 'scatter',
            name: 'ENGIA2',
            marker: { color: 'red' },
        },
        {
            x: [4.8],
            y: [2],
            mode: 'markers',
            type: 'scatter',
            name: 'ENGIB2',
            marker: { color: 'brown' },
        },
        {
            x: [7.9],
            y: [7],
            mode: 'markers',
            type: 'scatter',
            name: 'ENGIC3',
            marker: { color: 'black' },
        },
    ];
    //dados para o boxplot
    const boxplotData = [
        {
            x: Array(5).fill(1.5),
            y: [1.5, 2.1, 2.4, 2.2, 1.9],
            type: 'box',
            name: 'ENGIA0',
            marker: { color: 'blue' },
            boxpoints: false,
        },
        {
            x: Array(5).fill(2.7),
            y: [2.5, 2.8, 3.0, 2.7, 2.9],
            type: 'box',
            name: 'ENGIA1',
            marker: { color: 'purple' },
            boxpoints: false,
        },
        {
            x: Array(5).fill(3.0),
            y: [3.5, 3.2, 3.7, 3.8, 3.6],
            type: 'box',
            name: 'ENGIA2',
            marker: { color: 'red' },
            boxpoints: false,
        },
        {
            x: Array(5).fill(4.6),
            y: [2.8, 3.3, 3.0, 3.5, 3.2],
            type: 'box',
            name: 'ENGIB2',
            marker: { color: 'brown' },
            boxpoints: false,
        },
        {
            x: Array(5).fill(7.9),
            y: [2.8, 3.3, 3.0, 3.5, 4.5],
            type: 'box',
            name: 'ENGIC3',
            marker: { color: 'black' },
            boxpoints: false,
        },
    ];

    const data = [...lineData, ...scatterData, ...boxplotData];

    const layout = {
        title: 'Case C2P',
        xaxis: {
            title: { text: 'Duration Anos' },
            dtick: 1,
            tickmode: 'linear',
        },
        yaxis: {
            title: { text: 'Spreads a.a.' },
            range: [0, 10],
        },
        boxmode: 'group',
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Case C2P</h1>
            <Plot
                data={data}
                layout={layout}
                useResizeHandler={true}
                style={{ width: '100%' }}
                config={{ responsive: true }}
            />
        </div>
    );
}

export default App;
