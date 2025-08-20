import { useForm, ValidationError } from '@formspree/react';
import './contactForm.css';

type ContactFormProps = {
  formId: string;
};

const grades = Array.from({ length: 8 }, (_, i) => 5 + i); // 5–12
const days = ['Понеделник','Вторник','Сряда','Четвъртък','Петък','Събота','Неделя'];

const ContactForm = ({ formId }: ContactFormProps) => {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return <p>Благодарим! Заявката е изпратена успешно.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Име, Презиме, Фамилия на ученика */}
      <div>
        <label htmlFor="studentFirstName">Име на ученика</label>
        <input id="studentFirstName" name="student.firstName" required type='text'/>
        <ValidationError prefix="Име на ученика" field="student.firstName" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="studentMiddleName">Презиме на ученика (по избор)</label>
        <input id="studentMiddleName" name="student.middleName" type='text' />
        <ValidationError prefix="Презиме на ученика" field="student.middleName" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="studentLastName">Фамилия на ученика</label>
        <input id="studentLastName" name="student.lastName" required type='text'/>
        <ValidationError prefix="Фамилия на ученика" field="student.lastName" errors={state.errors} />
      </div>

      {/* Телефон на ученика (optional) */}
      <div>
        <label htmlFor="studentPhone">Телефон на ученика (по избор)</label>
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

      {/* Име Фамилия на родител */}
      <div>
        <label htmlFor="parentFirstName">Име на родител</label>
        <input id="parentFirstName" name="parent.firstName" type='text' required />
        <ValidationError prefix="Име на родител" field="parent.firstName" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="parentLastName">Фамилия на родител</label>
        <input id="parentLastName" name="parent.lastName" type='text' required />
        <ValidationError prefix="Фамилия на родител" field="parent.lastName" errors={state.errors} />
      </div>

      {/* Телефон на родител */}
      <div>
        <label htmlFor="parentPhone">Телефон на родител</label>
        <input
          id="parentPhone"
          name="parent.phone"
          type="tel"
          inputMode="tel"
          placeholder="+359 88 123 4567"
          pattern="^[+0-9()\\s-]{6,}$"
          required
        />
        <ValidationError prefix="Телефон на родител" field="parent.phone" errors={state.errors} />
      </div>

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

      {/* Училище (optional) */}
      <div>
        <label htmlFor="school">Училище (по избор)</label>
        <input id="school" name="school" placeholder="Училище в което учи" type='text'/>
        <ValidationError prefix="Училище" field="school" errors={state.errors} />
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
          {days.map(d => (
            <label key={d} style={{ marginRight: 8 }}>
              <input type="checkbox" name="preferredDays[]" value={d} /> {d}
            </label>
          ))}
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

      {/* Имейл за потвърждение (запазвам оригиналното поле) */}
      <div>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Допълнително съобщение (запазвам оригиналното поле) */}
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Изпращане…' : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm;
