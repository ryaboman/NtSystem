import classes from './AddDevice.module.css'


import Button from '../Button/Button';

function AddDeviceForm() {
    return (
            <form action="#" className={`${classes.dialog_box} ${classes.form}`} id="FormAddDevice" name="FormAddDevice" >
				<div className={`${classes.windowAddDevice}`}>
					<fieldset id="AddDevice">
						<legend>Форма добавления изделия в БД</legend>

						<div className={`${classes.field}`}>
							<label>Наименование изделия</label>
							<input type="text" id="AddNameDevice" required/>
						</div>

						<div className={`${classes.field}`}>
							<label>Обозначение изделия</label>
							<input type="text" id="AddMarkDevice" required/>
						</div>

						<div className={`${classes.buty}`}>
                            <Button type='button' background='#FF6347'>Отмена</Button>
                            <Button type='submit' background='#23b319'>Добавить</Button>
						</div>

					</fieldset>
				</div>
			</form>
            );
}

export default AddDeviceForm;

