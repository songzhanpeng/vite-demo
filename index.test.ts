import { it, expect } from 'vitest'
import { reverse } from './index'

it('反转字符串', () => {
  expect(reverse("test")).toMatchSnapshot()
})