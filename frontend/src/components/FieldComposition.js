import React from 'react';
import Field from './Field.js';
import { protect } from '../utils/protect.js';

const FieldComposition = function ({ fields, data, startIndex, variant, avatarColor }) {

  const mainField = fields[startIndex];
  const mainValue = data[startIndex];

  if (mainValue === null || mainValue === undefined || mainValue === '') {
    return (<div/>);
  }

  let avatarField = null;
  let avatarValue = null;
  let secondaryField = null;
  let secondaryValue = null;
  let index = startIndex + 1;
  let stop = false;
  while (index < fields.length && !stop) {
    const field = fields[index];
    const value = data[index];
    if (field.dockAs) {
      if (field.dockAs === 'avatar') {
        avatarField = field;
        avatarValue = value;
      }
      else if (field.dockAs === 'secondary') {
        secondaryField = field;
        secondaryValue = value;
      }
    }
    else {
      stop = true;
    }
    index++;
  }

  let mainPart = null;
  if (variant === 'title') {
    if (secondaryField) {
      mainPart = (
        <div className="fs-5 fw-bold">
          <Field
            value={mainValue}
            type={mainField.type}
            translate={mainField.translate}
            variant={mainField.variant}
            color={protect(mainField.color, mainValue)}
            style={protect(mainField.style, mainValue)}
          />
          <div className="fs-6 text-muted fw-light">
            <Field
              value={secondaryValue}
              type={secondaryField.type}
              translate={secondaryField.translate}
              variant={secondaryField.variant}
              color={protect(secondaryField.color, secondaryValue)}
              style={protect(secondaryField.style, secondaryValue)}
            />
          </div>
        </div>
      );
    }
    else {
      mainPart = (
        <div className="pt-1 fs-4 fw-bold">
          <Field
            value={mainValue}
            type={mainField.type}
            translate={mainField.translate}
            variant={mainField.variant}
            color={protect(mainField.color, mainValue)}
            style={protect(mainField.style, mainValue)}
          />
        </div>
      );
    }
  }
  else {
    mainPart = (
      <div>
        <Field
          value={mainValue}
          type={mainField.type}
          translate={mainField.translate}
          variant={mainField.variant}
          color={protect(mainField.color, mainValue)}
          style={protect(mainField.style, mainValue)}
        />
        {secondaryField && (
          <div className="text-muted fw-light">
            <Field
              value={secondaryValue}
              type={secondaryField.type}
              translate={secondaryField.translate}
              variant={secondaryField.variant}
              color={protect(secondaryField.color, secondaryValue)}
              style={protect(secondaryField.style, secondaryValue)}
            />
          </div>
        )}
      </div>
    );
  }

  if (avatarField) {
    return (
      <div className="d-flex align-items-center">
        <div className="pe-2">
          <div className={(variant === 'title' ? 'image-lg ' : 'image-sm ') + 'mx-auto bg-gray-lighter'}>
            {avatarValue ?
              <img src={avatarValue} alt="Image" className="img-fluid rounded-circle" /> :
              <div />
            }
          </div>
        </div>
        {mainPart}
      </div>
    );
  }
  else if (mainField.icon) {
    return (
      <div className="d-flex align-items-center">
        {variant === 'title' ?
          <div className="pe-2 pt-1 pb-2">
            <div className={'rounded bg-' + avatarColor + ' text-white'}>
              <div className="p-2">
                {React.createElement(mainField.icon, { size: 'lg' })}
              </div>
            </div>
          </div> :
          <div className={'pe-2' + (protect(mainField.color, mainValue) ? ' text-' + protect(mainField.color, mainValue) : '')}>
            {React.createElement(mainField.icon, { size: 'sm' })}
          </div>
        }
        {mainPart}
      </div>
    );
  }
  else {
    return mainPart;
  }
}

export default FieldComposition;