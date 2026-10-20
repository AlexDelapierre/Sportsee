import { Cell, Legend, Pie, PieChart } from "recharts";

interface WeeklyGoalChartProps {
  done: number;
  goal: number;
}

export function WeeklyGoalChart({ done, goal }: WeeklyGoalChartProps) {
  const remaining = Math.max(goal - done, 0);

  const goalData = [
    { name: `${done} réalisées`, value: done },
    { name: `${remaining} restants`, value: remaining },
  ];

  return (
    <div className="rounded-[20px] bg-white p-10 shadow-card">
      <p className="text-[28px] font-semibold text-primary">
        x{done}{" "}
        <span className="text-base font-medium text-primary-light">
          sur objectif de {goal}
        </span>
      </p>
      <p className="mt-2 text-sm text-grey">Courses hebdomadaire réalisées</p>

      <PieChart width={300} height={260} className="mx-auto">
        <Pie
          data={goalData}
          dataKey="value"
          innerRadius={50}
          outerRadius={100}
          startAngle={90}
          endAngle={-270}
        >
          <Cell fill="#0b23f4" />
          <Cell fill="#b6bdfc" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  );
}
