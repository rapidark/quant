/*
 * Copyright (c) Numerical Method Inc.
 * http://www.numericalmethod.com/
 * 
 * THIS SOFTWARE IS LICENSED, NOT SOLD.
 * 
 * YOU MAY USE THIS SOFTWARE ONLY AS DESCRIBED IN THE LICENSE.
 * IF YOU ARE NOT AWARE OF AND/OR DO NOT AGREE TO THE TERMS OF THE LICENSE,
 * DO NOT USE THIS SOFTWARE.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITH NO WARRANTY WHATSOEVER,
 * EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION,
 * ANY WARRANTIES OF ACCURACY, ACCESSIBILITY, COMPLETENESS,
 * FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, NON-INFRINGEMENT, 
 * TITLE AND USEFULNESS.
 * 
 * IN NO EVENT AND UNDER NO LEGAL THEORY,
 * WHETHER IN ACTION, CONTRACT, NEGLIGENCE, TORT, OR OTHERWISE,
 * SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
 * ANY CLAIMS, DAMAGES OR OTHER LIABILITIES,
 * ARISING AS A RESULT OF USING OR OTHER DEALINGS IN THE SOFTWARE.
 */
package util.frequency;

import org.joda.time.DateTime;

/**
 * Every second, starting at the beginning of the second and ending just before the end of the
 * second.
 *
 * @author Johannes Lehmann
 */
public class Second implements Frequency {

    @Override
    public DateTime periodBegin(DateTime time) {
        return new DateTime(time.getYear(),
                            time.getMonthOfYear(),
                            time.getDayOfMonth(),
                            time.getHourOfDay(),
                            time.getMinuteOfHour(),
                            time.getSecondOfMinute(),
                            0,
                            time.getZone());
    }

    @Override
    public DateTime periodEnd(DateTime time) {
        return periodBegin(time).plusSeconds(1);
    }
}
