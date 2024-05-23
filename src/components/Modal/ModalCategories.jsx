import React, {useEffect} from 'react';
import { useForm } from "react-hook-form";
import FormField from "../Elements/Form/FormField";
import {useCreateNewCategoriesMutation, useUpdateCategoriesMutation} from "../../services/categories";
import MyModal from "./MyModal";
import {initStateCategory} from "../../config";
import {notifyConfirm} from "../../utils/help";

const ModalCategories = ({ isShowing, hide, rowData, isCreating }) => {
		const { _id } = rowData;
		const {
				handleSubmit,
				control,
				formState: { errors }, reset
		} = useForm({
				defaultValues: isCreating ? { ...initStateCategory } : rowData
		});
		const [createNewCategories] = useCreateNewCategoriesMutation();
		const [updateCategories] = useUpdateCategoriesMutation();
		
		useEffect(() => {
				if (!isCreating && Object.keys(rowData).length > 0) {
						reset(rowData);
				}
		}, [rowData, isCreating]);
	
		const onSubmit = async (data) => {
				try {
						if (isCreating) {
								await createNewCategories(data);
								notifyConfirm("Tạo nghành hàng thành công");
						}
						else {
								const payload = {
										...data,
										_id: _id
								};
								await updateCategories(payload);
								notifyConfirm("Cập nhật nghành hàng thành công");
						}
						handleHideModal();
				} catch (err) {
						console.log(err);
				}
		}
		const handleHideModal = () => {
				hide();
				reset(initStateCategory);
		}
		
		return (
				<MyModal isShowing={isShowing} handleSubmit={handleSubmit} onSubmit={onSubmit} handleHideModal={handleHideModal} isCreating={isCreating}>
						<FormField
								control={control}
								errors={errors}
								name={"title"}
								placeholder={"Enter Name"}
								label={"Title"}
						/>
						<FormField
								control={control}
								errors={errors}
								name={"description"}
								placeholder={"Enter Description"}
								label={"Description"}
								inputType={"textarea"}
						/>
				</MyModal>
		);
}

export default ModalCategories;
