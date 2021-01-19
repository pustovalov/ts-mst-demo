/**
 * @prettier
 */

import { types, applySnapshot } from 'mobx-state-tree'

export const CurrentUser = types
  .model('CurrentUser', {
    id: types.number,
    account_id: types.number,
    email: '',
  })
  .views(self => ({
  }))
  .actions(self => ({
    update(data: string): void {
      applySnapshot(self, data)
    },
  }))
  .actions(self => ({
    fetch: () => {
      self.update(1)
    },
  }))
