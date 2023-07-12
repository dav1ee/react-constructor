import { useCallback } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

import { useAppDispatch } from '@/store';

export const useWithDispatch = <Type extends string, Payload>(
  fn: ActionCreatorWithPayload<Payload, Type>
) => {
  const dispatch = useAppDispatch();

  return useCallback(
    (payload: Payload) => dispatch(fn(payload)),
    [dispatch, fn]
  );
};
