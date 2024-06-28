import { z } from 'zod'

const SignUpSchema = z.object({
  username: z
    .string()
    .min(2, { message: '최소 2자 이상 입력해주세요.' })
    .max(10, { message: '최대 10자 이하로 입력해주세요.' }),
  email: z
    .string()
    .email({ message: '유효한 이메일 주소를 입력해주세요.' })
    .regex(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, {
      message: '이메일 형식이 올바르지 않습니다.',
    }),
  phoneNumber: z.string().regex(/^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/, {
    message: '올바른 휴대전화 번호 형식이 아닙니다.',
  }),
  password: z
    .string()
    .min(8, { message: '최소 8자 이상 입력해주세요.' })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
      {
        message: '대소문자 / 숫자 / 특수문자를 포함하여 입력해주세요.',
      },
    ),
  gender: z.enum(['남성', '여성'], {
    errorMap: () => ({ message: '성별을 선택해주세요.' }),
  }),
  nickname: z
    .string()
    .min(2, { message: '닉네임은 최소 2자 이상이어야 합니다.' })
    .max(20, { message: '닉네임은 최대 20자까지 허용됩니다.' }),
})

export default SignUpSchema
