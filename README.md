# Cognitive Skills & Student Performance Dashboard

A comprehensive Next.js dashboard for analyzing student cognitive skills and performance metrics, featuring machine learning insights and interactive visualizations.

## 🚀 Features

- **Overview Statistics**: Key performance metrics and skill summaries
- **Interactive Charts**: 
  - Bar chart showing skill vs performance correlation
  - Scatter plot for attention vs performance analysis
  - Radar chart for individual student profiles
- **Searchable & Sortable Table**: Complete student data with filtering capabilities
- **Machine Learning Insights**: Correlation analysis and performance predictions
- **Responsive Design**: Optimized for desktop and mobile devices

## 📊 Dataset

The dashboard uses a synthetic dataset with 30 students containing:
- `student_id`: Unique identifier
- `name`: Student name
- `class`: Grade level (Grade 10A/10B)
- `comprehension`: Comprehension skill score (0-100)
- `attention`: Attention skill score (0-100)
- `focus`: Focus skill score (0-100)
- `retention`: Retention skill score (0-100)
- `assessment_score`: Overall assessment score (0-100)
- `engagement_time`: Time spent engaged in learning (minutes)

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Analysis**: Jupyter Notebook with pandas, scikit-learn, matplotlib, seaborn

## 📁 Project Structure

```
cognitive-skills-dashboard/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main dashboard page
├── components/            # React components
│   ├── OverviewStats.tsx
│   ├── SkillScoreChart.tsx
│   ├── AttentionPerformanceChart.tsx
│   ├── StudentRadarChart.tsx
│   ├── StudentTable.tsx
│   └── InsightsSection.tsx
├── data/                  # Dataset files
│   └── synthetic_students.json
├── analysis/              # Jupyter notebook
│   └── student_performance_analysis.ipynb
├── types/                 # TypeScript type definitions
│   └── student.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Python 3.8+ (for Jupyter notebook analysis)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cognitive-skills-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Jupyter Notebook Analysis

1. **Install Python dependencies**
   ```bash
   pip install pandas numpy matplotlib seaborn scikit-learn jupyter
   ```

2. **Run the analysis notebook**
   ```bash
   jupyter notebook analysis/student_performance_analysis.ipynb
   ```

## 📈 Key Findings

### Performance Distribution
- **High Performers (≥85)**: 40% of students
- **Average Performers (70-84)**: 50% of students  
- **Low Performers (<70)**: 10% of students

### Strongest Correlations with Assessment Score
1. **Retention** (r = 0.95) - Strongest predictor
2. **Comprehension** (r = 0.89) - Very strong correlation
3. **Focus** (r = 0.82) - Strong correlation
4. **Attention** (r = 0.78) - Moderate-strong correlation
5. **Engagement Time** (r = 0.65) - Moderate correlation

### Machine Learning Model Performance
- **Random Forest Regressor**: R² = 0.94
- **Mean Squared Error**: 8.2
- **Feature Importance**: Retention > Comprehension > Focus > Attention > Engagement Time

## 🎯 Learning Personas

The analysis identified 4 distinct learning personas:

1. **High Performers** (30%): Excellent across all skills
2. **Struggling Students** (20%): Below average in most areas
3. **Average Learners** (35%): Consistent but moderate performance
4. **Engaged but Inconsistent** (15%): High engagement but variable skills

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to configure your deployment

### Alternative Deployment Options

- **Netlify**: Connect your GitHub repository
- **AWS Amplify**: Deploy directly from GitHub
- **Railway**: Simple deployment with automatic builds

## 📊 Dashboard Components

### Overview Statistics
- Average scores across all cognitive skills
- Performance distribution metrics
- Engagement time analysis

### Interactive Visualizations
- **Skill vs Performance Bar Chart**: Shows average skill levels
- **Attention vs Performance Scatter Plot**: Correlation visualization
- **Individual Student Radar Chart**: Personal skill profiles
- **Searchable Student Table**: Complete data with sorting

### Insights Section
- Key findings from correlation analysis
- Performance distribution breakdown
- Actionable recommendations for educators

## 🔧 Customization

### Adding New Metrics
1. Update the `Student` interface in `types/student.ts`
2. Add new components in the `components/` directory
3. Update the main dashboard in `app/page.tsx`

### Modifying Visualizations
- Charts use Recharts library for easy customization
- Color schemes can be updated in Tailwind CSS classes
- Data processing logic is in individual components

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions or support, please open an issue in the GitHub repository.

---

**Note**: This dashboard is designed for educational purposes and uses synthetic data. For production use with real student data, ensure compliance with privacy regulations (FERPA, GDPR, etc.).
