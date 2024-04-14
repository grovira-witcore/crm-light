import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import * as Recharts from 'recharts';
import { useAppContext } from '../../context/AppContext.js';
import Title from '../../components/Title.js';
import IconLead from '../../components/icons/IconLead.js';
import ApiService from '../../services/ApiService.js';
import { format } from '../../utils/format.js';
import { getWords } from '../../utils/get-words.js';

const TeamsMonitorLeft2 = ReactRouterDOM.withRouter(function ({  }) {
  const { i18n, setError } = useAppContext();
  const words = getWords(i18n.code);

  const [data, setData] = React.useState([]);
  const definedColors = ['blue', 'red', 'orange', 'yellow', 'green', 'purple', 'pink', 'brown', 'sky-blue', 'turquoise', 'gold', 'gray', 'black'];

  React.useEffect(() => {
  }, []);

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async function () {
    let records = null;
    try {
      records = await ApiService.getAggregateLeadsV3(null);
    }
    catch (error) {
      setError(error);
      return;
    }
    const data = records.map((record, index) => ({
      name: record.teamName,
      value: record.countOfRecords,
      color: definedColors[index]
    }));
    data.sort((a, b) => b.value - a.value);
    if (data.length > 12) {
      setData([...data.slice(0, 12), { name: 'others', translate: true, value: data.slice(12 - data.length).reduce((sum, item) => sum + item.value, 0), color: 'gray' }]);
    }
    else {
      setData(data);
    }
  }

  const translatedData = data.map((item) => ({
    name: item.translate ? words[item.name] : item.name,
    value: item.value,
    color: item.color
  }));

  const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, color, value }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${format(value, 'integer')} (${(percent * 100).toFixed(0)}%)`}
      </text>
    );
  }

  return (
    <div>
      <div>
        <div className="pb-1 d-flex align-items-center border-bottom">
          <Title level={1} icon={IconLead} color="blue" label={words.leadsByTeam} />
        </div>
        <Recharts.ResponsiveContainer width="100%" aspect={1}>
          <Recharts.PieChart>
            <Recharts.Pie
              data={translatedData}
              nameKey="name"
              dataKey="value"
              isAnimationActive={false}
              labelLine={false}
              label={renderLabel}
            >
              {translatedData.map((entry, index) => (
                <Recharts.Cell key={'cell-' + index} className={'fill-' + entry.color} />
              ))}
            </Recharts.Pie>
            <Recharts.Tooltip
              formatter={(value, name) => [format(value, 'integer'), name]}
            />
          </Recharts.PieChart>
        </Recharts.ResponsiveContainer>
        <ul className="d-flex flex-wrap">
          {translatedData.map((entry, index) => (
            <li style={{ paddingRight: 24 }} className={'text-nowrap text-' + entry.color} key={'item-' + index}>{entry.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
})

export default TeamsMonitorLeft2;
