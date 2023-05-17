import React from 'react'
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type TBasicLineChartProps = {
    lineColor: string
    data: { x: string; y: number }[];
}

export default function BasicLineChart(props: TBasicLineChartProps & Partial<ApexOptions>) {
    const { lineColor, data } = props
    const options = {
        chart: {
            id: 'basic-line',
            toolbar: {
                show: false
            }
        },
        xaxis: {
            tooltip: { enabled: false },
            labels: {
                show: false,
            },
              axisTicks: {
                show: false
              },
            categories: data.map((d) => d.x),
        },
        yaxis: {
            labels: {
                show: false,
            }
        },
        grid: {
            show: false
        },
        stroke: {
            width: 2,
            curve: (props as any).curve || 'smooth'
        },
        colors: [`${lineColor}`],
        tooltip: {
            // enabled: false
        }
    }
    const series = [
        {
            name: 'Series 1',
            data: data.map((d) => d.y),
        },
    ]
  return (
    <>
        <ReactApexChart options={options} series={series} type="line" width={"100%"} height={130} />
    </>
  )
}
