import React from 'react';
import FieldComposition from './FieldComposition.js';

const Brief = function ({ fields, data, skipFirst }) {
  return (
    <div className="d-flex flex-wrap">
      {data.map(function (value, index) {
        const field = fields[index];
        if ((skipFirst && index === 0) || field.dockAs) {
          return null;
        }
        return (
          <div key={'value-' + index} className={'pt-2 pe-4' + (field.responsiveBreakpoints ? ' ' + field.responsiveBreakpoints : '')}>
            <div className="fw-bold">
              {field.label}
            </div>
            <div className="align-middle">
              <FieldComposition
                fields={fields}
                data={data}
                startIndex={index}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Brief;