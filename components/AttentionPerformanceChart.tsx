'use client'

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Student } from '../types/student'

interface AttentionPerformanceChartProps {
  students: Student[]
}

export default function AttentionPerformanceChart({ students }: AttentionPerformanceChartProps) {
  const scatterData = students.map(student => ({
    attention: student.attention,
    performance: student.assessment_score,
    name: student.name
  }))

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Attention vs Performance</h3>
      <div style={{ height: '20rem' }}>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart data={scatterData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              type="number" 
              dataKey="attention" 
              name="Attention"
              domain={[0, 100]}
              label={{ value: 'Attention Score', position: 'insideBottom', offset: -5 }}
            />
            <YAxis 
              type="number" 
              dataKey="performance" 
              name="Performance"
              domain={[0, 100]}
              label={{ value: 'Assessment Score', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              cursor={{ strokeDasharray: '3 3' }}
              formatter={(value: number, name: string) => [value, name === 'performance' ? 'Assessment Score' : 'Attention Score']}
              labelFormatter={(label, payload) => {
                if (payload && payload[0]) {
                  return `Student: ${payload[0].payload.name}`
                }
                return ''
              }}
            />
            <Scatter dataKey="performance" fill="#10B981" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
