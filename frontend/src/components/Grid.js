import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import FieldComposition from './FieldComposition.js';


const Grid = function ({ fields, contextualActions, onClickItem, items, selectedKey }) {
  const [current, setCurrent] = React.useState(null);

  const handleItemMouseOver = function (e, item) {
    let currentNode = e.target;
    while (currentNode && currentNode.nodeName !== 'TR') {
      currentNode = currentNode.parentNode;
    }
    if (currentNode) {
      setCurrent({
        item: item,
        target: currentNode.childNodes[currentNode.childNodes.length - 1],
        dummy: null
      });
    }
  }

  const contextualActionClick = function (e, contextualAction, item) {
    if (e.ctrlKey) {
      return;
    }
    setCurrent(null);
    contextualAction.onClick(e, item);
  }

  return (
    <div className="table-responsive" onMouseLeave={() => setCurrent(null)}>
      <table className="table">
        <thead>
          <tr onMouseOver={() => setCurrent(null)}>
            {fields.map(function (field, index) {
              if (field.dockAs) {
                return null;
              }
              return (
                <th key={index} className={(field.dispensable ? 'd-none d-' + field.dispensable + '-table-cell ' : '') + (field.alignment ? field.alignment + ' ' : '')}>
                  <span>{field.label}</span>
                </th>
              );
            })}
            <th className="p-0 border-0" />
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.key}
              className={selectedKey !== item.key ? (current && current.item.key === item.key ? 'bg-current' + (onClickItem ? ' cursor-pointer' : '') : '') : 'bg-selected'}
              onMouseOver={selectedKey !== item.key ? (e) => handleItemMouseOver(e, item) : null}
              onClick={selectedKey !== item.key ? function (e) {
                if (e.ctrlKey) {
                  return;
                }
                if (onClickItem) {
                  onClickItem(e, item);
                }
              } : null}
            >
              {item.data.map(function (value, index) {
                const field = fields[index];
                if (field.dockAs) {
                  return null;
                }
                return (
                  <td key={'value-' + index} className={(field.dispensable ? 'd-none d-' + field.dispensable + '-table-cell ' : '') + 'align-middle ' + (field.alignment ? field.alignment + ' ' : '')}>
                    <FieldComposition
                      fields={fields}
                      data={item.data}
                      startIndex={index}
                    />
                  </td>
                );
              })}
              <td key={-1} className="p-0 border-0" />
            </tr>
          ))}
        </tbody>
      </table>
      {current &&
        <ReactBootstrap.Overlay show={true} target={current.target} placement="left">
          <div className="d-flex ps-5 bg-current" style={{ zIndex: 100000 }}>
            {contextualActions.map((contextualAction, index) =>
              !(contextualAction.hidden && contextualAction.hidden(current.item)) ? (
                <div key={index} className="ps-2">
                  <div className={'p-2 d-flex btn btn-outline-' + contextualAction.color + ' border-0'} onClick={(e) => contextualActionClick(e, contextualAction, current.item)}>
                    <div>
                      {React.createElement(contextualAction.icon, { size: 'xs' }, null)}
                    </div>
                    <div className="ps-2">
                      {contextualAction.label}
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </ReactBootstrap.Overlay>
      }
    </div>
  );
}

export default Grid;