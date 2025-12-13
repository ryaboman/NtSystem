import './AddDevice.css'


import Button from '../Button/Button';

function AddDeviceForm() {
    return (
            <form action="#" className="dialog_box" id="FormAddDevice" name="FormAddDevice" >
				<div id="windowAddDevice">
					<fieldset id="AddDevice">
						<legend>Форма добавления изделия в БД</legend>

						<div className="field">
							<label>Наименование изделия</label>
							<input type="text" id="AddNameDevice" required/>
						</div>

						<div className="field">
							<label>Обозначение изделия</label>
							<input type="text" id="AddMarkDevice" required/>
						</div>

						<div id="buty">
                            <Button type='button' background='#FF6347'>Отмена</Button>
                            <Button type='submit' background='#23b319'>Добавить</Button>
						</div>

					</fieldset>
				</div>
			</form>
            );
}

export default AddDeviceForm;

