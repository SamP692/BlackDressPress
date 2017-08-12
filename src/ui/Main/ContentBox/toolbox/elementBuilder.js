const buildGridElement = (location, innerElement, options = null) => '';

// template[location] ?
//   <div className={location === 'bottom' ?
//     `${location} ${options.bottomAlign === 'left' ? 'bottomLeft' : 'bottomRight'}` :
//     location}
//   >
//     {componentElements[template[location]]}
//   </div> :
//   null

const buildSequentialElement = () => '';

export default ({ location, template, }) => (
  type === 'grid' ? buildGridElement() : buildSequentialElement()
);
