import classes from './styles.module.css';
import EditableList from '../components/editableList';
import ColumnTitle from '../components/columnTitle';

function Main() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>Should I eat at McDonalds?</div>
      <div className={classes.item}>
        <ColumnTitle title="Pros"/>
        <EditableList />
      </div>
      <div className={classes.item}>
        <ColumnTitle title="Cons"/>
        <EditableList />
      </div>
    </div>
  );
}

export default Main;