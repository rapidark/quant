/*******************************************************************************
 * Copyright (c) 2013 Luigi Sgro. All rights reserved. This
 * program and the accompanying materials are made available under the terms of
 * the Eclipse Public License v1.0 which accompanies this distribution, and is
 * available at http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Luigi Sgro - initial API and implementation
 ******************************************************************************/
package com.pureblue.quant.algo_service;

import java.util.logging.Logger;

import com.pureblue.quant.algo.ICommissionCalculator;
import com.pureblue.quant.algo.ISimulatedExecutionService;
import com.pureblue.quant.algo.ISimulatedExecutionServiceFactory;


public class SimulatedExecutionServiceFactory implements ISimulatedExecutionServiceFactory {
	@SuppressWarnings("unused")
	private static final Logger logger = Logger.getLogger(SimulatedExecutionServiceFactory.class.getName());
	private volatile ICommissionCalculator commissionCalculator;
	
	public void deactivate() { }
	
	public void setCommissionCalculator(ICommissionCalculator commissionCalculator) {
		this.commissionCalculator = commissionCalculator;
	}

	@Override
	public ISimulatedExecutionService createSimulatedExecutionService() {
		return new SimulatedExecutionService(commissionCalculator);
	}
}
