import React from 'react'
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type TBasicDonutChartProps = {
    data: { x: string; y: number }[]
}

export default function BasicDonutChart(props: TBasicDonutChartProps & Partial<ApexOptions>) {
    const { data } = props
    const options = {
        legend: {
            show: false
        },
        stroke: {
            width: 0
        },
        labels: data.map((d) => d.x),
        series: data.map((d) => d.y),
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300,
                        height: 300
                    }
                }
            },
            {
                breakpoint: 1200,
                options: {
                    chart: {
                        width: 150,
                        height: 150
                    }
                }
            },
        ]

    }
  return (
    <>
        <ReactApexChart options={options} series={options.series} type="donut" width={300} height={300} />
    </>
  )
}
