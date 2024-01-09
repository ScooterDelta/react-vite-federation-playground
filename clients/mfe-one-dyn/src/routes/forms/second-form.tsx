import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  favouriteDog: string;
  favouriteCat: string;
  numberDogs: number;
  numberCats: number;
}

export const SecondForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <div className="mfe1d-h-full mfe1d-bg-base-200">
      <form className="mfe1d-h-full" onSubmit={handleSubmit(onSubmit)}>
        <label className="mfe1d-form-control mfe1d-w-full mfe1d-max-w-xs mfe1d-pl-6 mfe1d-pt-4">
          <span className="mfe1d-label-text">What is your favourite dog?</span>
          <input
            {...register('favouriteDog', { required: true, maxLength: 20 })}
            className="mfe1d-input mfe1d-input-bordered mfe1d-w-full mfe1d-max-w-xs"
          />
        </label>
        <label className="mfe1d-form-control mfe1d-w-full mfe1d-max-w-xs mfe1d-pl-6 mfe1d-pt-4">
          <span className="mfe1d-label-text">How many dogs do you have?</span>
          <input
            {...register('numberDogs', { min: 18, max: 99 })}
            className="mfe1d-input mfe1d-input-bordered mfe1d-w-full mfe1d-max-w-xs"
          />
        </label>
        <label className="mfe1d-form-control mfe1d-w-full mfe1d-max-w-xs mfe1d-pl-6 mfe1d-pt-4">
          <span className="mfe1d-label-text">What is your favourite cat?</span>
          <input
            {...register('favouriteCat', { pattern: /^[A-Za-z]+$/i })}
            className="mfe1d-input mfe1d-input-bordered mfe1d-w-full mfe1d-max-w-xs"
          />
        </label>
        <label className="mfe1d-form-control mfe1d-w-full mfe1d-max-w-xs mfe1d-pl-6 mfe1d-pt-4">
          <span className="mfe1d-label-text">How many cats do you have?</span>
          <input
            {...register('numberCats', { min: 18, max: 99 })}
            className="mfe1d-input mfe1d-input-bordered mfe1d-w-full mfe1d-max-w-xs"
          />
        </label>
        <div className="mfe1d-py-4 mfe1d-pl-6">
          <input
            type="submit"
            className="mfe1d-btn mfe1d-btn-primary mfe1d-btn-outline"
          />
        </div>
      </form>
    </div>
  );
};

export default SecondForm;
