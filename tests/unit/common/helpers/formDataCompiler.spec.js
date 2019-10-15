import { ObjectToFormData } from '~/common/helpers/formDataCompiler';

describe('FormDataCompiler', () => {
  it('execute ObjectToFormData correctly', () => {
    const formData = ObjectToFormData({ text: 'sample', number: 123 });
    expect(formData instanceof FormData).toBe(true);
    expect(formData.get('text')).toMatch('sample');
    expect(formData.get('number')).toMatch('123');
  });
});
