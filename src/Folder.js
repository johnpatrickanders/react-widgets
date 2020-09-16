import React from 'react';

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: this.props.folders,
      currentTab: this.props.currentTab
    }
  }

  selectTab = (idx) => {
    this.setState({ currentTab: idx })
  }

  render() {
    const { folders, currentTab } = this.state;
    console.log(folders, currentTab);
    const folder = folders[currentTab];
    const titles = folders.map(folder => folder.title);
    return (
      <div>
        <h1>Folder</h1>
        <div className="tabs">
          {/* Hello */}
          <Headers
            titles={titles}
            currentTab={this.state.currentTab}
            selectTab={this.selectTab}
          />
          <div className='tab-content'>
            {folder.content}
          </div>
        </div>
      </div>
    )
  }
}

const Headers = ({ titles, currentTab, selectTab }) => {
  const handleClick = e => {
    const idx = parseInt(e.target.id, 10);
    selectTab(idx);
  }
  const tabs = titles.map((title, idx) => {
    const headerClass = (idx === currentTab) ? 'active' : '';
    return (
      <li className={headerClass} key={idx} id={idx} onClick={handleClick}>
        {title}
      </li>
    );
  });

  return (
    <ul className='tab-header'>
      {tabs}
    </ul>
  );
}

Folder.defaultProps = {
  currentTab: 0,
}

export default Folder;
