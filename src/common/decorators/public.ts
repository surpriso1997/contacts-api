import { SetMetadata } from '@nestjs/common';

export const Is_Anon_Api = 'isAnonymousApi';

export const Anon = () => SetMetadata(Is_Anon_Api, true);
