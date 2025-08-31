import { useForm, ValidationError } from '@formspree/react';
import './contactForm.css';
import DaysSelect from './multi-select';

type ContactFormProps = {
  formId: string;
};

const grades = Array.from({ length: 8 }, (_, i) => 5 + i); // 5–12
const days = ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота', 'Неделя'];

const ContactForm = ({ formId }: ContactFormProps) => {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return <p className='success-message'>Благодарим! Заявката е изпратена успешно.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Име, Презиме, Фамилия на ученика */}
      <div>
        <label htmlFor="studentFirstName">Име </label>
        <input id="studentFirstName" name="student.firstName" required type='text' />
        <ValidationError prefix="Име на ученика" field="student.firstName" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="studentLastName">Фамилия </label>
        <input id="studentLastName" name="student.lastName" required type='text' />
        <ValidationError prefix="Фамилия на ученика" field="student.lastName" errors={state.errors} />
      </div>
      {/* Телефон на ученика (optional) */}
      <div>
        <label htmlFor="studentPhone">Телефон </label>
        <input
          id="studentPhone"
          name="student.phone"
          type="tel"
          inputMode="tel"
          placeholder="+359 88 123 4567"
          pattern="^[+0-9()\\s-]{6,}$"
        />
        <ValidationError prefix="Телефон на ученика" field="student.phone" errors={state.errors} />
      </div>
            <div>
        <label htmlFor="email">Електронна поща</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
    
<span className='line-span'></span>
      {/* Клас (5–12) */}
      <div>
        <label htmlFor="grade">Клас</label>
        <select id="grade" name="grade" required defaultValue="">
          <option value="" disabled>Изберете клас</option>
          {grades.map(g => (
            <option key={g} value={g}>{g} клас</option>
          ))}
        </select>
        <ValidationError prefix="Клас" field="grade" errors={state.errors} />
      </div>

      {/* Група / Частно (радио) */}
      <div>
        <label>Форма на обучение</label>
        <div>
          <label>
            <input type="radio" name="format" value="group" required /> Група
          </label>
          {' '}
          <label>
            <input type="radio" name="format" value="private" /> Частно
          </label>
        </div>
        <ValidationError prefix="Форма на обучение" field="format" errors={state.errors} />
      </div>

      {/* Предпочитани дни (checkboxes) */}
      <div>
        <label>Предпочитани дни</label>
        <div>
          <DaysSelect
            days={days}
            name="preferredDays"
            defaultValues={[]}
          />

        </div>
        <ValidationError prefix="Предпочитани дни" field="preferredDays" errors={state.errors} />
      </div>

      {/* Сутрин / Следобед (checkboxes) */}
      <div>
        <label>Предпочитано време</label>
        <div>
          <label style={{ marginRight: 8 }}>
            <input type="checkbox" name="timeOfDay[]" value="Сутрин" /> Сутрин
          </label>
          <label>
            <input type="checkbox" name="timeOfDay[]" value="Следобед" /> Следобед
          </label>
        </div>
        <ValidationError prefix="Предпочитано време" field="timeOfDay" errors={state.errors} />
      </div>
<span className='line-span'></span>


      {/* Допълнително съобщение (запазвам оригиналното поле) */}
      <div>
        <label htmlFor="message">Съобщение</label>
        <textarea id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button type="submit" className='btn primary' disabled={state.submitting}>
        {state.submitting ? 'Изпращане…' : 'Изпрати'}
      </button>
    </form>
  );
};

export default ContactForm;
