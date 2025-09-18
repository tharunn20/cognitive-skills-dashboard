'use client'

import { Student } from '../types/student'

interface InsightsSectionProps {
  students: Student[]
}

export default function InsightsSection({ students }: InsightsSectionProps) {
  // Calculate insights
  const avgScore = students.reduce((sum, student) => sum + student.assessment_score, 0) / students.length
  const avgComprehension = students.reduce((sum, student) => sum + student.comprehension, 0) / students.length
  const avgAttention = students.reduce((sum, student) => sum + student.attention, 0) / students.length
  const avgFocus = students.reduce((sum, student) => sum + student.focus, 0) / students.length
  const avgRetention = students.reduce((sum, student) => sum + student.retention, 0) / students.length
  const avgEngagement = students.reduce((sum, student) => sum + student.engagement_time, 0) / students.length

  // Find correlations
  const correlations = {
    comprehension: calculateCorrelation(students.map(s => s.comprehension), students.map(s => s.assessment_score)),
    attention: calculateCorrelation(students.map(s => s.attention), students.map(s => s.assessment_score)),
    focus: calculateCorrelation(students.map(s => s.focus), students.map(s => s.assessment_score)),
    retention: calculateCorrelation(students.map(s => s.retention), students.map(s => s.assessment_score)),
    engagement: calculateCorrelation(students.map(s => s.engagement_time), students.map(s => s.assessment_score))
  }

  const strongestCorrelation = Object.entries(correlations).reduce((a, b) => Math.abs(correlations[a[0] as keyof typeof correlations]) > Math.abs(correlations[b[0] as keyof typeof correlations]) ? a : b)

  // Performance distribution
  const highPerformers = students.filter(s => s.assessment_score >= 85).length
  const averagePerformers = students.filter(s => s.assessment_score >= 70 && s.assessment_score < 85).length
  const lowPerformers = students.filter(s => s.assessment_score < 70).length

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Key Insights & Findings</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Overview */}
        <div>
          <h4 className="text-md font-semibold text-gray-800 mb-4">Performance Distribution</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">High Performers (≥85)</span>
              <span className="text-sm font-medium text-green-600">{highPerformers} students</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Average Performers (70-84)</span>
              <span className="text-sm font-medium text-yellow-600">{averagePerformers} students</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Low Performers (&lt;70)</span>
              <span className="text-sm font-medium text-red-600">{lowPerformers} students</span>
            </div>
          </div>
        </div>

        {/* Correlation Analysis */}
        <div>
          <h4 className="text-md font-semibold text-gray-800 mb-4">Skill Correlations with Performance</h4>
          <div className="space-y-2">
            {Object.entries(correlations).map(([skill, correlation]) => (
              <div key={skill} className="flex justify-between items-center">
                <span className="text-sm text-gray-600 capitalize">{skill}</span>
                <span className={`text-sm font-medium ${Math.abs(correlation) > 0.5 ? 'text-green-600' : 'text-gray-600'}`}>
                  {correlation.toFixed(3)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Findings */}
      <div className="mt-8">
        <h4 className="text-md font-semibold text-gray-800 mb-4">Key Findings</h4>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-medium text-blue-900 mb-2">Strongest Performance Predictor</h5>
            <p className="text-sm text-blue-800">
              <strong>{strongestCorrelation[0].charAt(0).toUpperCase() + strongestCorrelation[0].slice(1)}</strong> shows the strongest correlation 
              (r = {strongestCorrelation[1].toFixed(3)}) with assessment scores, making it the best predictor of student performance.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h5 className="font-medium text-green-900 mb-2">Overall Performance</h5>
            <p className="text-sm text-green-800">
              The average assessment score across all students is <strong>{avgScore.toFixed(1)}</strong>, with 
              <strong> {((highPerformers / students.length) * 100).toFixed(1)}%</strong> of students achieving high performance levels.
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h5 className="font-medium text-yellow-900 mb-2">Engagement Insights</h5>
            <p className="text-sm text-yellow-800">
              Students spend an average of <strong>{avgEngagement.toFixed(1)} minutes</strong> engaged in learning activities. 
              Engagement time shows a {correlations.engagement > 0 ? 'positive' : 'negative'} correlation with performance.
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h5 className="font-medium text-purple-900 mb-2">Recommendations</h5>
            <ul className="text-sm text-purple-800 space-y-1">
              <li>• Focus on improving {strongestCorrelation[0]} skills for better performance outcomes</li>
              <li>• Implement personalized learning strategies based on individual skill profiles</li>
              <li>• Monitor engagement time as it correlates with assessment performance</li>
              <li>• Provide targeted support for students in the lower performance categories</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to calculate correlation coefficient
function calculateCorrelation(x: number[], y: number[]): number {
  const n = x.length
  const sumX = x.reduce((a, b) => a + b, 0)
  const sumY = y.reduce((a, b) => a + b, 0)
  const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0)
  const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0)
  const sumY2 = y.reduce((sum, yi) => sum + yi * yi, 0)
  
  const numerator = n * sumXY - sumX * sumY
  const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY))
  
  return denominator === 0 ? 0 : numerator / denominator
}
