import _ from 'lodash';

export const searched = res => (data) => {
  if (!_.isEmpty(data)) {
    res.status(200).json(data);
    return;
  }
  res.status(404).end();
};

export const created = res => (data) => {
  if (data) {
    res.status(201).json(data);
  }
  return null;
};

export const updated = res => () => {
  res.status(204).end();
};

export const deleted = res => () => {
  res.status(204).end();
};
