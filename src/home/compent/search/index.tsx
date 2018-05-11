import * as classnames from 'classnames';
import * as React from 'react';
import './style/index.less';

export interface Props {
  placeholder: string;
  maxLength: number;
  className?: string;
  onSubmit: () => void;
}

export class SearchBar extends React.Component<Props> {
  render() {
    const { placeholder, maxLength, className, onSubmit } = this.props;
    const searchBarClass = classnames('kiki-searchBar', className);
    return (
      <form className={searchBarClass} onSubmit={onSubmit} action="#">
        <div className="searchBar-wapper">
          <i className="icon icon-Search" />
          <input
            type="search"
            className="searchBar-input"
            placeholder={placeholder}
            maxLength={maxLength}
          />
        </div>
      </form>
    );
  }
}
