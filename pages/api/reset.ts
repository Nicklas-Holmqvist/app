import type { NextApiRequest, NextApiResponse } from 'next';

import { supabase } from '../../lib/supabaseClient';
import { KurhusetList } from '../../types/KurhusetIOstersund';

type Data = {
  data: KurhusetList[] | null;
  count: number;
  error: any;
};

type NextApiRequestProps = NextApiRequest & {
  body: {
    database: string;
  };
};

export default async function handler(
  req: NextApiRequestProps,
  res: NextApiResponse<Data>
) {
  const { database } = req.body;

  try {
    const { data, count, error } = await supabase
      .from(database)
      .select(
        'list_order, number, date_of_enrollment, first_name, last_name, age, disease, discharge_date, discharge_status',
        { count: 'exact' }
      )
      .order('list_order', { ascending: true })
      .range(0, 24);

    if (error) {
      const fetchedData = {
        data: [],
        count: 0,
        error: error,
      };
      res.status(500).json(fetchedData);
    } else {
    }
    const fetchedData = {
      data: data,
      count: Number(count),
      error: error,
    };
    res.status(200).json(fetchedData);
  } catch (error) {
    const fetchedData = {
      data: [],
      count: 0,
      error: error,
    };
    res.status(500).json(fetchedData);
  }
}
