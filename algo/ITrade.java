/*******************************************************************************
 * Copyright (c) 2013 Luigi Sgro. All rights reserved. This
 * program and the accompanying materials are made available under the terms of
 * the Eclipse Public License v1.0 which accompanies this distribution, and is
 * available at http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Luigi Sgro - initial API and implementation
 ******************************************************************************/
package algo;

import java.util.Date;

/**
 * Executed trade information
 */
public interface ITrade {
	/**
	 * Order from which the trader has originated
	 */
	IOrder getOrder();
	/**
	 * Venue of execution
	 */
	String getExchange();
	/**
	 * Time of execution
	 */
	Date getExecutionTime();
	/**
	 * Amount filled
	 */
	int getAmount();
	/**
	 * Execution price
	 */
	double getExecutionPrice();
	/**
	 * Average price, including fees and commissions
	 */
	double getAveragePrice();
}