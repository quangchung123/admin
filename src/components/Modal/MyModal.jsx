import React from 'react';
import ReactDOM from 'react-dom';
import {useForm} from "react-hook-form";
import FormField from "../Elements/Form/FormField";
import {useCreateNewProductMutation} from "../../services/product";

const Modal = ({ isShowing, hide }) => {
		const {
				handleSubmit,
				control,
				formState: {errors},
				reset
		} = useForm();
		const [mutation] = useCreateNewProductMutation();
		const onSubmit = async (data) => {
			 await	mutation(data);
				reset();
				hide();
		}
		return isShowing ? ReactDOM.createPortal(
				<React.Fragment>
						<div className="fixed inset-0 bg-black opacity-50"/>
						<div className="fixed inset-0 flex items-center justify-center">
								<div className="bg-white rounded-lg max-w-md p-8">
										<form onSubmit={handleSubmit(onSubmit)}>
												<FormField control={control} errors={errors} name={"title"} placeholder={"Enter Title"} label={"Title"} />
												<FormField control={control} errors={errors} name={"count"} placeholder={"Enter Count"} label={"Count"} type={"number"} />
												<FormField control={control} errors={errors} name={"description"} placeholder={"Enter Description"} label={"Description"} />
												<FormField control={control} errors={errors} name={"image"} placeholder={"Enter Image"} label={"Image"} />
												<div>
														<button type="submit">Update</button>
														<button onClick={hide}>Cancel</button>
												</div>
										</form>
								</div>
						</div>
				</React.Fragment>, document.body
		) : null;
}

export default Modal;
