import { Children, createElement} from 'react'

const isEmptyChildren = children => Children.count(children) === 0

export default ({ children, component, render, props }) => {
  if (component) {
    return createElement(component, props)
  }

  if (render) {
    return render(props)
  }

  if (typeof children === 'function') {
    return children(props)
  }

  if (children && !isEmptyChildren(children)) {
    return Children.only(children)
  }

  return null
}
