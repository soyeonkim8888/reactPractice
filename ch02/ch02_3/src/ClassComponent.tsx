import {Component, type FC} from 'react'

export type ClassComponentProps = {
    href: string
    text: string
}

class ClassComponent extends Component<ClassComponentProps> {
  render() {
    const { href, text } = this.props;

    return (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    );
  }
}

export default ClassComponent