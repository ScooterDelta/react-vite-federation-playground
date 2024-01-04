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
    <div className="mfe1-h-full mfe1-bg-base-200">
      <form className="mfe1-h-full" onSubmit={handleSubmit(onSubmit)}>
        <label className="mfe1-form-control mfe1-w-full mfe1-max-w-xs mfe1-pl-6 mfe1-pt-4">
          <span className="mfe1-label-text">What is your favourite dog?</span>
          <input
            {...register('favouriteDog', { required: true, maxLength: 20 })}
            className="mfe1-input mfe1-input-bordered mfe1-w-full mfe1-max-w-xs"
          />
        </label>
        <label className="mfe1-form-control mfe1-w-full mfe1-max-w-xs mfe1-pl-6 mfe1-pt-4">
          <span className="mfe1-label-text">How many dogs do you have?</span>
          <input
            {...register('numberDogs', { min: 18, max: 99 })}
            className="mfe1-input mfe1-input-bordered mfe1-w-full mfe1-max-w-xs"
          />
        </label>
        <label className="mfe1-form-control mfe1-w-full mfe1-max-w-xs mfe1-pl-6 mfe1-pt-4">
          <span className="mfe1-label-text">What is your favourite cat?</span>
          <input
            {...register('favouriteCat', { pattern: /^[A-Za-z]+$/i })}
            className="mfe1-input mfe1-input-bordered mfe1-w-full mfe1-max-w-xs"
          />
        </label>
        <label className="mfe1-form-control mfe1-w-full mfe1-max-w-xs mfe1-pl-6 mfe1-pt-4">
          <span className="mfe1-label-text">How many cats do you have?</span>
          <input
            {...register('numberCats', { min: 18, max: 99 })}
            className="mfe1-input mfe1-input-bordered mfe1-w-full mfe1-max-w-xs"
          />
        </label>
        <div className="mfe1-py-4 mfe1-pl-6">
          <input type="submit" className="mfe1-btn mfe1-btn-primary" />
        </div>
      </form>
    </div>
  );
};
